// Bender ehf — tilboðsform
// Þessi síða er kyrrstæð HTML-skrá án bakenda, svo fyrirspurnin er sett saman
// sem tölvupóstur og opnuð í tölvupóstforriti gestsins, stílað á bender@bender.is.
// Þegar síðan er útfærð í WordPress ætti þessi virkni að víkja fyrir alvöru
// formviðbót (t.d. WPForms / Contact Form 7) sem sendir póstinn sjálfvirkt frá vefþjóni.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('tilbod-form');
  if (!form) return;

  var TIL = 'bender@bender.is';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = new FormData(form);
    var get = function (name) {
      return (data.get(name) || '').toString().trim();
    };

    var nafn = get('nafn');
    var fyrirtaeki = get('fyrirtaeki');

    var subject = 'Fyrirspurn um tilboð — ' + (fyrirtaeki || nafn || 'vefsíða Bender');

    var body = [
      'Nafn: ' + nafn,
      'Fyrirtæki: ' + fyrirtaeki,
      'Sími: ' + get('simi'),
      'Netfang: ' + get('netfang'),
      'Hvað vantar: ' + get('hvad_vantar'),
      'Tímarammi: ' + get('timarammi'),
      '',
      'Nánari lýsing:',
      get('lysing') || '(ekkert skrifað)',
    ].join('\n');

    var mailtoLink = 'mailto:' + TIL
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;

    var status = document.getElementById('form-status');
    status.textContent = 'Tölvupóstforritið þitt opnast með fyrirspurnina útfyllta — ýttu á Senda þar til að klára.';
    status.classList.add('text-brand-deep', 'font-semibold');
    form.reset();
  });
});
