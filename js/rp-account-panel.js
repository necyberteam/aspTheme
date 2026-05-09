/**
 * RP account panel — async balance load + state-based refresh.
 *
 * Triggered when the server-rendered panel marker indicates we should
 * fetch fresh data:
 *   - data-stale="1": rows present but stale → refresh in background
 *   - data-state="no_rows_unknown" | "error": DB has no rows; might still
 *     have an account; ask the API
 *   - .rp-balance-loading: a grant's balance was missing in SSR
 *
 * If none of these conditions hold, the panel was fully rendered SSR and
 * this script does nothing.
 *
 * On API success:
 *   has_account=true → fill .rp-balance text per grant_number
 *   has_account=false → rewrite panel HTML to "GET AN ACCOUNT" CTA
 *   has_account=null → leave skeleton; user retries by refreshing
 *
 * On HTTP failure: console.warn; leave DOM as-is.
 */
(function () {
  'use strict';

  function init() {
    var panel = document.querySelector('.rp-account-panel');
    if (!panel) {
      return;
    }
    var rpNid = panel.dataset.rpNid;
    if (!rpNid) {
      return;
    }
    var stale = panel.dataset.stale === '1';
    var state = panel.dataset.state || '';
    var loadingBalance = panel.querySelector('.rp-balance-loading') !== null;
    var needsRefresh = stale
      || state === 'no_rows_unknown'
      || state === 'error'
      || loadingBalance;
    if (!needsRefresh) {
      return;
    }

    var url = '/api/1.0/rp-account/' + encodeURIComponent(rpNid);
    if (loadingBalance || stale) {
      url += '?live=1';
    }

    fetch(url, {
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json' },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        renderResponse(panel, data);
      })
      .catch(function (err) {
        if (window.console && console.warn) {
          console.warn('rp-account refresh failed', err);
        }
      });
  }

  function renderResponse(panel, data) {
    if (data.has_account === true) {
      // Fill in each grant's balance.
      var grants = Array.isArray(data.grants) ? data.grants : [];
      grants.forEach(function (grant) {
        var cell = panel.querySelector(
          '.rp-balance[data-grant="' + cssEscape(grant.grant_number) + '"]'
        );
        if (!cell || !grant.project_balance) {
          return;
        }
        var formatted = Number(grant.project_balance).toLocaleString(undefined, {
          maximumFractionDigits: 0,
        });
        cell.textContent =
          'Balance: ' + formatted + ' ' + (grant.billable_unit || '');
      });
    } else if (data.has_account === false) {
      // We confirmed they have no account. Replace skeleton with CTA.
      var manageUrl = data.manage_url || 'https://allocations.access-ci.org/';
      var rpName = (data.rp_display_name || '').toUpperCase();
      panel.innerHTML =
        '<h3 class="mt-0 text-lg font-bold text-white">GET AN ACCOUNT ON ' +
        escapeHtml(rpName) +
        '</h3>' +
        '<a href="' + escapeHtml(manageUrl) + '" class="btn btn-primary">' +
        'Apply for an account</a>';
    }
    // has_account === null → leave panel as-is.
  }

  /**
   * Escape a value for use inside a CSS attribute selector. Lightweight
   * implementation; handles the characters that grant_numbers can contain.
   */
  function cssEscape(s) {
    if (window.CSS && typeof window.CSS.escape === 'function') {
      return window.CSS.escape(s);
    }
    return String(s).replace(/(["\\\]\[])/g, '\\$1');
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
