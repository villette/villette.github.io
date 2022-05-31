// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{
  coded = "AbnnZXXZ.DbZccZ@PJzbn.KlJ"
  key = "ghWxajBcoqCDHiNwVkA9ZU1SLPt4uz3mKlTOdYb5GEQ7r8RfpsIXM20vJenyF6"
  shift=coded.length
  link=""

  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }

  document.write('<a href="mailto:' + link + '" target="_blank" rel="noopener noreferrer">' + link + '</a>')
}
