# Tech Against Fascism

### Wieso fällt uns wechseln so schwer?

#### Vendor Lock-In

- Netzwerkeffekt: Alles findet auf Telegram statt

- Datensilo: Unsere ganzen Chats/Profildaten sind dort gespeichert

- Deswegen suchen wir nach open source und (am besten) föderierten/interoperablen Services, wägen diese aber auch gegen Sicherheit ab

### Probleme mit Telegram

- Telegram ist standardmässig nicht Ende zu Ende (e2e) verschlüsselt (Nachrichten sind serverseitig lesbar!)

- Telegram arbeitet seit einigen Jahren mit Behörden zusammen und gibt Daten an diese weiter ([link](https://cyberinsider.com/telegram-sharing-user-data-with-us-authorities/))

- Unsere Daten sind der willkürlichen Entscheidung von Alex Durov ausgeliefert

### Alternativen (Privat Chats)

- Die bekannteste und auch sicherste Alternative ist [Signal](https://signal.org/de/)
  - Beste Verschlüsselung (Egal wer Kontrolle über Server hat, Nachrichten + Absender:in sind nicht auslesbar)
  - hat bereits viele User:innen
  - Server ist nicht föderiert und kann von autoritären Staaten geblockt werden ([und wird es bereits](https://ooni.org/post/2021-how-signal-private-messenger-blocked-around-the-world/))

- Als Backup zu Signal kann [Delta Chat](https://delta.chat/de/) dienen ([hier ausführlicher](https://signal-contingency-plan.info/))
  - Nachrichten sind auch sehr sicher verschlüsselt
  - Dafür sind ca. die letzten 20 Tage an Kommunikation des Servers dort gespeichert (Nachrichten verschlüsselt, Metadaten nicht verschlüsselt)
  - Durch föderierte Server und einem auf email basierten Protokoll, ist es schwer bis unmöglich Delta Chat komplett zu blockieren

### Alternativen (Channels)

- Da Signal keine Untergruppen unterstützt und Gruppengrössen begrenzt sind, hält das manche grösseren Gruppen vom Wechsel ab. Dafür gibt es zwei Alternativen:

- [Matrix](https://matrix.org/) 
  - ist ein föderiertes Protokoll mit e2ee
  - schon weit verbreitet, viele [Homeserver](https://servers.joinmatrix.org/) zur Auswahl
  - Die Burg betreibt auch einen eigenen [Matrix Server](https://matrix.burg-halle.de/#/welcome), der mit den studi Zugangsdaten benutzbar ist
  - Chat Metadaten werden an jeden Homeserver kopiert, deren User:innen teil des Channels sind (leicht auslesbar)

- [mov.im](https://movim.eu/)
  - ist ein Client/Bedienoberfläche für [xmpp](https://xmpp.org/), ist föderiert und nutzt e2e Verschlüsselung
  - funktioniert ähnlich wie discord und hat ein Blogging Feature
  - ein Account bei jeglichem [xmpp Provider](https://providers.xmpp.net/) reicht aus um mov.im zu benutzen
  - weniger weit verbreitet und buggier, nur als webapp verfügbar (es gibt andere [xmpp Clients (Bedienoberflächen)](https://xmpp.org/software/?category=clients), die aber nicht die gleichen Features anbieten)
  - Dafür werden Metadaten nicht so einfach auffindbar wie bei Matrix

### Fazit Messenger

Es gibt viele offene und sichere Optionen um von Telegram fort zu kommen. Den Netzwerkeffekt können wir nur durch kollektiven Wechsel bekämpfen. 
**Vor Staatstrojanern oder direkten Zugriff aufs Handy durch andere kann uns kein Messenger schützen!** Trotzdem lohnt es sich sicherere Alternativen zu benutzen.

## Weitere Ressourcen

### Kollaborationstools, gehostet auf Spendenbasis (ohne Mitgliedschaft)

- [framasoft](https://framasoft.org/en/) (entwickelt PeerTube) bietet unter:
  - [Entgoogle das Internet](https://degooglisons-internet.org/) viele spendenbasierte Dienste an
  - [framasuite](https://framasuite.org/en/) noch mehr Dienste
  - Fast alle sind offen/mit offener Registrierung benutzbar, wenn ihr diese benutzt, denkt daran zu spenden!
- [chatons](https://entraide.chatons.org/en/) hostet dezentralisiert Dienste

### andere Vereine/Organisationen welche Dienste anbieten

- [riseup](https://riseup.net/) pads, pastebins, wikis für alle + andere Dienste mit Einladung
- [systemli](https://www.systemli.org/index.html) manche Dienste frei, manche mit Einladung
- [servus.at](https://core.servus.at/) viele Dienste (cloud, mail, hosting etc.) mit Mitgliedschaft (10€ p.M.) für Kulturschaffende
- [lurk](https://lurk.org/) xmpp, icecast, wikis, mailinglisten für Mitglieder:innen
- [systemausfall](https://systemausfall.org/index.html) mail, xmpp, cloudspeicher, hosting etc. für Mitglieder:innen

### andere Sammlungen

- [Resistant Infra](https://circulations.constantvzw.org/octomode/infra-resistance/pagedjs.html) von [titipi](https://titipi.org/): gehostete und selbhostbare cloud software, Organisationssoftware, andere Listen :)
- [weird little guys of FOSS](https://drewdevault.com/weird-guys/) von [Drew Devault](https://drewdevault.com/): Faschisten in der Open Source Community
  - [guter Blogbeitrag zum Thema](https://brennan.day/normalized-fascism-in-open-source-12-million-given-to-dhh/) von Brennan Brown
- [Fashware](https://git.sr.ht/~rabbits/fashware) von [devine lu linvega](https://wiki.xxiivv.com/site/devine_lu_linvega.html): Quellen zu fragwürdigem bis faschistischem Verhalten von Tech Unternehmen und Personen des Tech Universums
