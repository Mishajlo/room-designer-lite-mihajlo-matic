Opis:
Rešenje je implementirano korišćenjem React biblioteke, kombinovane sa klasičnim HTML-om, CSS-om.
Projekat je organizovan u nekoliko komponenti:
1. Canvas - Radna površina na kojoj korisnik može da proizvoljno postavlja tačke koje kasnije može povezati linijama u redosledu dodavanja tačaka. Tokom rada pored trenutne pozicije na ekranu korisnik može videti i svoje trenutne koordinate na samoj površini.
2. Button Bar - Jednosavan meni sa opcijama koje korisnik može da koristi tokom rada.
3. Buttons - Dugmići koji u odnosu na navedenu opciju pružaju određenu funkcionalnost. Funkcionalnosti su: 1. Close Room - Trenutno postavljene tačke povezuju se linijama, u redosledu dodavanja samih tačaka. Svaka linija pored sebe ima napisanu dužinu izraženu u centimetrima. 2. Clear Canvas - Izbacuje prozor za potvrdu kojim korisnik odlučuje da li sa radne površine želi da obriše trenutne tačke i linije između njih. 3. Save as PNG - Trenutni prikaz radne površine izvozi se u vidu .png slike.
4. Confirmation Modal - Jednostavan prozor za interakciju sa korisnikom pri čišćenju radne površine.

Canvas sadrži najveću količinu logike koda, kao centralna komponenta koja omogućava celokupni rad programa. Propagacija odgovarajućih funkcija i stanja ostalim komponentama ostvarena je pomoću TypeScript interfejsa i propova. Održavanje stanja samog canvasa postignuto je korišćenjem State Hook-ova, koji pamte trenutne tačke, konekcije između njih i poziciju miša na radnoj površini.

Pokretanje se može jednostavno izvršiti iz terminala pomoću funkcije: npm run dev

Description:
The solution is implemented using the React library, combined with plain HTML and CSS.
The project is organised in a couple of components:
1. Canvas - User workspace where the user can place points at will which can later be connected with lines in the order they were placed. While working, the user can see their current coordinates next to the cursor.
2. Button Bar - A simple menu with user options.
3. Buttons - Customized buttons with different funcionalities. The functionalities are: 1. Close Room - Conncets all the placed points with lines in the order the points themselves were added. Each line has it's length displayed next to it in centimeters. 2. Clear Canvas - Activates a pop-up dialogue where user can confirm if they want to clear the canvas of currently placed points and their connections. 3. Save as PNG - Exports the current workspace as a .png picture.
4. Confirmation Modal - Simple pop-up window for user to confirm if they want to clear the workspace.

The Canvas itself contains the most of the code logic, as it is the central component which enables the core of the app. Propagation of functions and states to the other components is done using TypeScript interfaces and props. Upkeep of the states is done with the use of UseState Hooks, which are used for the Points, Lines that connect them and for keeping track of the current cursor position.

The program can simply be ran from the terminal using the npm run dev command
