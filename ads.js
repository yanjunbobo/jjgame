// GameGuide AI - AdSense Placeholder
// Replace ca-pub-XXXXXXXXXX with your actual AdSense client ID
// All ad slots are controlled from this single file
(function() {
  const client = 'ca-pub-XXXXXXXXXX';
  const slots = { header: 1234567890, inarticle: 1234567891, footer: 1234567892 };
  
  function load() {
    if (window.adsbygoogle) { adsbygoogle.push({}); }
  }
  
  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      var s = document.createElement('script');
      s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client;
      s.async = true;
      document.head.appendChild(s);
      setTimeout(load, 500);
    });
  } else {
    var s = document.createElement('script');
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client;
    s.async = true;
    document.head.appendChild(s);
    setTimeout(load, 500);
  }
})();
