import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          widgets: {
            part1: "Selling stats and charts",
            part2: "Selling quality",
            part3: "Orders",
            part4: "Advices for sellers",
            part5: "Top offers",
            part6: "Recent reviews"
          },
          quality: {
            part1: "Avg. product rank:",
            part2: "Avg. client satisfaction:",
            part3: "Avg. communication satisfaction:",
            part4: "Your rank:",
            part5: "Your rating: ",
            none: "No data",

            userRank1: "Private",
            userRank2: "Corporal",
            userRank3: "Sergeant",
            userRank4: "Major",
            userRank5: "General",
            userRank0: "No rank"
          },
          orders: {
            part1: "Not yet paid",
            part2: "Unsent",
            part3: "Returns",
            part4: "GO TO",
            noOrders:
              "You don't have any orders yet. Go ahead and use some of our advertising methods!"
          },
          advices: {
            part1: "You should attach high-resolution images to your products.",
            part2:
              "You should send your products in time. The faster the client gets the product, the higher the satisfaction."
          },
          offers: {
            part1: "avg. price",
            part2: "sold",
            part3: "income",
            part4: "SORT BY:",
            part5: "current price",
            part6: "unique views",
            sortby1: "MOST SOLD",
            sortby2: "LEAST SOLD",
            noOffers: "You don't have any offers."
          },
          reviews: {
            part1: "added a review",
            part2: "SHOW MORE",
            part3: "SHOWING:",
            showing1: "ALL",
            showing2: "POSITIVE",
            showing3: "NEGATIVE"
          },
          pages: {
            seemore: "Customers' reviews",
            returns: "Order returns",
            unsent: "Orders unsent",
            notyetpaid: "Orders not yet paid",
            goback: "Back to the home page",
            quality: "Selling quality"
          }
        }
      },
      pl: {
        translation: {
          widgets: {
            part1: "Dane sprzedaży i wykresy",
            part2: "Jakość sprzedaży",
            part3: "Zamówienia",
            part4: "Wskazówki dla sprzedawców",
            part5: "Ranking ofert",
            part6: "Ostatnie opinie"
          },
          quality: {
            part1: "Śr. ocena produktu:",
            part2: "Śr. ocena satysfakcji klienta:",
            part3: "Śr. ocena komunikacji:",
            part4: "Twoja ranga:",
            part5: "Twoja ocena: ",
            none: "Brak danych.",

            userRank1: "Szeregowy",
            userRank2: "kapral",
            userRank3: "Sierżant",
            userRank4: "Major",
            userRank5: "Generał",
            userRank0: "brak"
          },
          orders: {
            part1: "Nieopłacone",
            part2: "Niewysłane",
            part3: "Zwroty",
            part4: "IDŹ DO",
            noOrders:
              "Nie masz jeszcze żadnych zamówień. Użyj naszych metod reklamy, aby przyciągnąć więcej klientów."
          },
          advices: {
            part1:
              "Powinieneś dołączyć zdjęcia w wysokiej rozdzielczości do swoich produktów.",
            part2:
              "Powinieneś wysłać swoje produkty na czas. Im szybciej klient otrzyma produkt, tym większa satysfakcja."
          },
          offers: {
            part1: "śr. cena",
            part2: "sprzedane",
            part3: "przychód",
            part4: "SORTUJ WG:",
            part5: "obecna cena",
            part6: "wyświetleń",
            sortby1: "NAJWIĘCEJ SPRZEDANYCH",
            sortby2: "NAJMNIEJ SPRZEDANYCH",
            noOffers: "Nie posiadasz żadnych ofert."
          },
          reviews: {
            part1: "dodał opinię",
            part2: "POKAŻ WIĘCEJ",
            part3: "POKAŻ:",
            showing1: "WSZYSTKIE",
            showing2: "POZYTYWNE",
            showing3: "NEGATYWNE"
          },
          pages: {
            seemore: "Opinie kupujących",
            returns: "Zwroty zamówień",
            unsent: "Zamówienia niewysłane",
            notyetpaid: "Zamówienia nieopłacone",
            goback: "Powrót na stronę główną",
            quality: "Jakość sprzedaży"
          }
        }
      }
    }
  });

export default i18n;
