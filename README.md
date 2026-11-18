# Tech Against Fascism



## Ausgangslage: 

### Big Tech & Autokratie 
 
1. Big Tech sind zentralisierte Infrastrukturen und besitzten enorme wirtschaftliche und politische Macht ohne demokratische Legitimation. Sie bestimmen die Bedingungen gesellschaftlicher Kommunikation und erzwingen durch soziale Abhängigkeit faktisch ihre Nutzung.

3. Daten und Algorithmen ermöglichen Verhaltenssteuerung, beeinflussen Sichtbarkeit und fördern durch die Aufmerksamkeitsökonomie Polarisierung.

4. KI reproduziert und verstärkt gesellschaftliche Verzerrungen auf Basis intransparenter, oft ohne Zustimmung genutzter Daten – gilt aber weiterhin als neutral (vgl. [Nils Bolder](https://t3n.de/news/tech-philosoph-warnt-vor-den-folgen-von-ki-1700221/)).

5. Gesellschaftliche und ethische Konflikte werden technisiert und demokratischer Aushandlung entzogen. Der [Techno-Optimismus](https://en.wikipedia.org/wiki/Techno-Optimist_Manifesto) weniger Oligarchen stellt sich über menschliche Würde und Freiheit.


### Fighting Tech Fascism

Veröffentlcht am 14.Mai 2025 von Jürgen Geuter aka @tante:
 - https://error417.expectation.fail/406/tech-fascism-not-acceptable/essay-refusing-tech-fascism-by-tante


 > Tech Fascism emerges when a select few have the power to structure the world according to their very limited ideals of efficiency and 'rationality'


### Tech-Regime Mappings 

LittleSis ist eine Open-Source-Datenbank und Rechercheplattform, die Verflechtungen zwischen einflussreichen Personen und Organisationen aus Politik, Wirtschaft und Finanzwelt dokumentiert:

- https://littlesis.org/home

Complex web of AI figures:

- https://littlesis.org/oligrapher/10454-complex-web-of-ai-figures 

Mapping Trump's crypto empire:

- https://map.citationneeded.news/


Palantir, a Big Tech company at the heart of the Trump administration:

- https://multinationales.org/en/investigations/the-reactionary-international-285/palantir-a-big-tech-company-at-the-heart-of-the-trump-administration

*Infographie von Zelda Mauger:*

![image](https://multinationales.org/local/adapt-img/960/20x/IMG/jpg/palantir-en.jpg@.webp?1780904976)


## Strategie 1: Opting Out


### Allgemeine Privatsphäre bei (kommerziellen) Anbietern

#### Google
- Google-Datenschutz > Web- und App-Aktivitäten > Deaktivieren
- Standortverlauf / Zeitachse > Deaktivieren
- YouTube-Verlauf > Speicherung deaktivieren

#### WhatsApp
- Einstellungen > Datenschutz > Standard-Nachrichtendauer > 24 Stunden / 7 Tage
- Einstellungen > Chats > Chat-Backup > Ende-zu-Ende-verschlüsseltes Backup > Aktivieren
- Einstellungen > Datenschutz > Profilbild / Zuletzt online / Info > Meine Kontakte oder Niemand

#### Telegram
- Einstellungen > Datenschutz und Sicherheit > Telefonnummer / Profilbild / Zuletzt online > Sichtbarkeit einschränken
- Einzelkontakt öffnen > Profil > Mehr > Geheimen Chat starten

#### Signal
- Einstellungen > Datenschutz > Bildschirmsperre aktivieren
- Einstellungen > Datenschutz > Registrierungs-Sperre aktivieren
- Chat öffnen > Kontaktname > Verschwindende Nachrichten

#### iCloud & iMessage
- Einstellungen > Apple Account > iCloud > Erweiterter Datenschutz > Aktivieren
- Wiederherstellungskontakt oder Wiederherstellungsschlüssel einrichten

#### iPhone – App-Tracking
- Einstellungen > Datenschutz & Sicherheit > Tracking > App-Tracking-Anfragen erlauben > Aus
- Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > App-Berechtigungen einschränken
- Mikrofon / Kamera > Zugriffe nicht benötigter Apps entziehen


### KI-Objection

#### Instagram & Facebook (Meta)
- Einstellungen > Datenschutz-Center > KI bei Meta > Widerspruch gegen Datennutzung einlegen > Formular absenden

#### LinkedIn
- Profilbild > Einstellungen und Datenschutz > Datenschutz > Daten zur Verbesserung generativer KI > Aus

#### ChatGPT
- Profil > Einstellungen > Datenkontrollen > Das Modell für alle verbessern > Aus

#### Google Gemini
- Gemini > Einstellungen > Gemini-Apps-Aktivität > Keep Activity deaktivieren

#### Claude
- Einstellungen > Datenschutz > Verwendung deiner Daten zur Modellverbesserung deaktivieren


### Grenzen und Probleme:

- Einstellungen reduzieren Tracking und Datennutzung teilweise, bieten aber keine vollständige, und vor allem rückwirkende sowie wirklich transparent einsehbare, Kontrolle über die eigenen Daten. 
- Nutzer:innen müssen sich kontinuierlich und bei jeder neuen Funktion erneut selbst schützen, während Geschäftsmodelle und Machtverhältnisse der Konzerne unverändert bestehen bleiben.


## +weitere KI-Counter-Measures

### Nightshade & Glaze

- [Nightshade](https://nightshade.cs.uchicago.edu/) – Verändert Bilder durch gezielte Pixelmanipulationen (»Data-Poisioning«) um KI-Trainingsdaten zu verfälschen und das Training an den eigenen Werken zu erschweren.
- [Glaze](https://glaze.cs.uchicago.edu/) – Verändert minimale visuelle Bildmerkmale, sodass KI-Modelle den individuellen Kunststil möglichst schwer imitieren können.

**Aktueller Status (November 2026):** Beide Dienste sind seit Anfang November offenbar nicht erreichbar; die genaue Ursache ist bislang nicht verlässlich bestätigt.

#### Fragliche Wirksamkeit:
Eher Outdated. Beide Tools bieten keinen zuverlässigen Schutz vor KI-Training, da ihre Schutzmechanismen durch technische Gegenmassnahmen umgangen werden können und sie bereits verbreitete Bildkopien nicht nachträglich schützen. Ausserdem: Glaze Kann durch die Stilverschleierung leichte visuelle Veränderungen verursachen, die je nach Bild auffallen können.

### Mist

- [Mist (V2)](https://github.com/psyker-team/mist-v2) – Open-Source-Tool, das Bilder minimal verändert, damit KI-Modelle den Stil nicht per Feintuning (LoRA, DreamBooth, SDEdit) nachahmen können. Anders als Glaze und Nightshade läuft es lokal und ist nicht auf einen zentralen Dienst angewiesen.

**Aktueller Status (18.11.2026):** Das offizielle Colab-Notebook ist gelöscht. Wie aktiv das Projekt noch gepflegt wird, ist unklar.

#### Installation: Vorsicht
- Aufwändig: Windows-Paket (Nvidia-GPU ab 6 GB VRAM), Installation per Python/conda oder langsame CPU-Variante, etwa 3 bis 5 Minuten pro Bild.
- Das Windows-Paket liegt auf Google Drive. Wer Google meiden will, muss aus dem Quellcode installieren.
- Colab-Notebooks von Dritten können Code ausführen und auf Drive oder Zugangsdaten zugreifen. Vorher den Code prüfen, Drive nicht freigeben, am besten ein Wegwerf-Konto nutzen.

#### Fragliche Wirksamkeit:
- Schützt nur gegen Stilkopie per Feintuning, nicht gegen das Training grosser Modelle.
- Laut Entwicklern nur Mehraufwand für Angreifer, keine unabhängigen Belege.
- Schutz kann umgangen werden, veröffentlichte Bilder bleiben ungeschützt.


### Robots.txt

Du kannst eine `robots.txt` in den Root-Verzeichnis deiner Website erstellen (`deine-domain.de/robots.txt`). Sie regelt, welche Bots welche Inhalte crawlen dürfen.

#### Beispiele.

**Alle Bots sperren:**
```txt
User-agent: *
Disallow: /
```

**Bestimmte Ordner sperren:**
```txt
User-agent: *
Disallow: /private/
Disallow: /admin/
```

**KI-Training mit Texten einschränken:**
```txt
User-agent: GPTBot
Disallow: /
```

**KI-Crawler von Bildern ausschließen:**
```txt
User-agent: GPTBot
Disallow: /images/
Disallow: /*.jpg$
Disallow: /*.png$
```

**Google-KI-Nutzung einschränken:**
```txt
User-agent: Google-Extended
Disallow: /
```

**Sensible Bereiche sperren:**
```txt
User-agent: *
Disallow: /kunden/
Disallow: /backup/
Disallow: /user-data/
```

#### Hinweise:
- `User-agent: *` sperrt alle regelkonformen Crawler. Dadurch können auch Bilder aus der Google-Bildersuche verschwinden.
- KI-Dienste lassen sich gezielt ansprechen, z. B. `GPTBot` (OpenAI), `ClaudeBot` (Anthropic) oder `CCBot` (Common Crawl).
- **Keine Garantie:** Crawler können Regeln ignorieren oder ihre Identität verschleiern. `robots.txt` ist kein technischer Zugriffsschutz.


### Aktuelle Bot-Liste: 

[ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt)


### .htaccess

Anders als `robots.txt` ist das keine Bitte, sondern wird vom Server durchgesetzt. Die Datei `.htaccess` liegt im Root-Verzeichnis der Website (nur Apache/LiteSpeed, bei nginx wirkungslos).

**KI-Bots sperren:**
```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} (GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|anthropic-ai|CCBot|Bytespider|Amazonbot|PerplexityBot|meta-externalagent|Diffbot|ImagesiftBot) [NC]
RewriteRule .* - [F,L]
</IfModule>
```

**Einfache Scraper sperren:**
```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} ^$ [OR]
RewriteCond %{HTTP_USER_AGENT} ^(python-requests|Scrapy|Go-http-client) [NC]
RewriteRule .* - [F,L]
</IfModule>
```
- Wirkt nur bei ehrlichem User-Agent, getarnte Crawler kommen auch heir easy durch.
- Risiko: Tippfehler = Fehler 500. Vorher Kopie der Datei machen und die Seite danach testen.

## Strategie 2: Alternativen & Federation 

### Zentrale Netwerke vs. Federation 

Für einen Kompletten ausstieg aus diesen Infrastrukturen empfiehlt es sich Föderierte Systeme zu nutzen. Föderierte Systeme sind Netzwerke aus eigenständigen, unabhängigen Instanzen (Servern), die über gemeinsame Standards miteinander kommunizieren. Im Gegensatz zu zentralen Systemen, bei denen ein einzelnes Unternehmen alle Daten und Regeln kontrolliert, verteilen föderierte Systeme die Macht auf viele verschiedene Betreiber. Bekannte Beispiele für diese Technologie ist das Fediverse (mit Plattformen wie Mastodon).


### Beispiel Mastodon

[Mastodon](https://joinmastodon.org/de) ist ein dezentrales soziales Netzwerk ähnlich wie X (Twitter). Nutzer:innen können Beiträge veröffentlichen, anderen folgen und Inhalte teilen. Mastodon besteht aus vielen unabhängigen Servern, sogenannten Instanzen. Nutzer:innen können selbst entscheiden, welcher Instanz sie beitreten möchten. Die Plattform ist kostenlos, werbefrei und Open Source.

#### Wichtig:
- **Kein Algorithmus:** Einerseits beruhigender, kein Algo-Regime / weniger manipulative Feed-Steuerung. Andererseits gibt es dementsprechend weniger personalisierte Empfehlungen und Reichweite – man muss aktiver nach Nutzer:innen und Inhalten suchen.

- **Viele Instanzen:** Unterschiedliche Regeln und Communities ermöglichen eine passende Umgebung. Eigene Codes of Conduct können für Safe Spaces sorgen und für eine intensivere, authentischere Gemeinschaft sorgen, die Auswahl kann anfangs aber etwas verwirrend sein.