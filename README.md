# 5/3/1 Treningslogg

En mobilvennlig, installérbar treningslogg laget fra treningsoppsettet i Excel-arket. Appen er på norsk, fungerer offline etter første lasting og lagrer avkrysninger, assistanse og treningsmaks lokalt i nettleseren. Standardoppsettet har tomme treningsmaks slik at personlige tall ikke publiseres i kildekoden.

## Publiser gratis med GitHub Pages

Denne mappen inneholder også Excel-arket. **Ikke last opp hele `Trening`-mappen** til et offentlig repository. Bruk den rene undermappen `publisering`, som bare inneholder appfilene.

1. Logg inn på [github.com](https://github.com/) og opprett et repository, for eksempel `531-treningslogg`. Velg **Public**.
2. Åpne `Trening\publisering` i Filutforsker. Dra de sju filene derfra inn i GitHubs **Add file → Upload files**. Ikke last opp Excel-arket eller sikkerhetskopier.
3. Trykk **Commit changes** for å lagre filene.
4. I repositoryet, åpne **Settings → Pages**. Under **Build and deployment**, velg **Deploy from a branch**, deretter branchen `main` og mappen `/(root)`, og trykk **Save**.
5. Når GitHub viser Pages-adressen (vanligvis `https://BRUKERNAVN.github.io/531-treningslogg/`), åpne den i Safari på iPhone.
6. I Safari: trykk **Del → Legg til på Hjem-skjerm**.

Siden er offentlig: andre kan åpne appen og lese appfilene. Standardoppsettet inneholder ingen personlige løftemaks. Treningsloggen du fører i appen blir fortsatt lagret lokalt i din Safari-nettleser og sendes ikke til GitHub.

## Bruk på iPhone

Før første økt: åpne **Treningsmaks og innstillinger**, fyll inn 1RM eller treningsmaks for hvert løft, og velg **Beregn TM fra 1RM** hvis du vil at TM skal settes til 90 % av 1RM. Estimatoren under innstillingene bruker samme Epley-formel som PR-fanen i Excel-arket. Velg løft, skriv inn vekt og reps, og trykk **Bruk estimatet og beregn TM** for å sette 1RM og TM for det løftet. Data synkroniseres ikke automatisk mellom telefoner eller nettlesere. Bruk **Last ned sikkerhetskopi** under innstillingene for å ta vare på treningsloggen, og **Importer sikkerhetskopi** for å gjenopprette den.

## Innhold

- Tre treningsuker med tre økter per uke og de to hovedløftene fra regnearket.
- Vekter beregnes fra treningsmaks, avrundes til nærmeste 2,5 kg og kan endres i innstillingene.
- Siste toppsett er markert med «+», og ekstra repetisjoner kan logges.
- Estimert 1RM beregnes med Epley-formelen fra PR-fanen i Excel-arket, og kan brukes til å beregne TM for valgt løft.
- Hvert hovedsett og de fem ekstra 5 × 5-settene kan krysses av.
- Assistanseøvelser og repetisjoner kan noteres for hver økt.
- Treningsmakser starter tomme, slik at ingen personlige tall inngår i den offentlige appen.
