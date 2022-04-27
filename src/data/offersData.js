import obraz1 from "./offersDataImages/obraz1.png";
import obraz2 from "./offersDataImages/obraz2.png";
import obraz3 from "./offersDataImages/obraz3.png";
import obraz4 from "./offersDataImages/obraz4.png";
import obraz5 from "./offersDataImages/obraz5.png";
import assemblyImg from "./offersDataImages/assembly_jpg.jpg";
import rubyImg from "./offersDataImages/ruby_img.jpg";
import sinatraImg from "./offersDataImages/sinatra_image.jpg";

export var offersDataSet = {
  mostSoldOffers: [
    {
      id: 265,
      name: "Learning Python, 5th Edition Fifth Edition by Mark Lutz",
      image: obraz5,
      sold: 165,
      avgPrice: 61.34,
      uniqueViews: 3012
    },
    {
      id: 341,
      name:
        "Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition by Eric Matthes ",
      image: obraz3,
      sold: 198,
      avgPrice: 55.21,
      uniqueViews: 33271
    },
    {
      id: 126,
      name: "Thinking in Java 4th Edition by Bruce Eckel",
      image: obraz2,
      sold: 302,
      avgPrice: 108.46,
      uniqueViews: 556
    },
    {
      id: 653,
      name:
        "The C Programming Language - Kernighan and Ritchie (1988, Trade Paperback, Revised edition)",
      image: obraz1,
      sold: 403,
      avgPrice: 61.34,
      uniqueViews: 371
    },
    {
      id: 93,
      name:
        "SQL QuickStart Guide: The Simplified Beginner's Guide to Managing, Analyzing, and Manipulating Data With SQL Illustrated Edition ",
      image: obraz4,
      sold: 47,
      avgPrice: 61.34,
      uniqueViews: 301
    },
    {
      id: 96,
      name:
        "SQL QuickStart Guide2: The Simplified Beginner's Guide to Managing, Analyzing, and Manipulating Data With SQL Illustrated Edition ",
      image: obraz4,
      sold: 56,
      avgPrice: 61.34,
      uniqueViews: 301
    }
  ],
  leastSoldOffers: [
    {
      id: 701,
      name:
        "The C Programming Language - Kernighan and Ritchie (1977, first edition)",
      image: obraz1,
      sold: 7,
      avgPrice: 40.0,
      uniqueViews: 21
    },
    {
      id: 16433,
      name: "The C Programming Language - Kernighan and Ritchie edition II",
      image: obraz1,
      sold: 3,
      avgPrice: 45.0,
      uniqueViews: 15
    },
    {
      id: 16434,
      name:
        "Ruby Pocket Reference: Instant Help for Ruby Programmers 2nd Edition",
      image: rubyImg,
      sold: 3,
      avgPrice: 30.0,
      uniqueViews: 11
    },
    {
      id: 16435,
      name: "Learning Sinatra Paperback – April 27, 2016",
      image: sinatraImg,
      sold: 2,
      avgPrice: 100.0,
      uniqueViews: 9
    },
    {
      id: 16436,
      name: "Assembly Language for x86 Processors 7th Edition",
      image: assemblyImg,
      sold: 1,
      avgPrice: 175.0,
      uniqueViews: 5
    }
  ]
};

export function getMostSoldOffersData() {
  let offersMap = new Map();

  offersDataSet.mostSoldOffers.forEach((offer) => {
    offersMap.set(offer.id.toString(), offer);
  });

  return offersMap;
}

export function getLeastSoldOffersData() {
  let offersMap = new Map();

  offersDataSet.leastSoldOffers.forEach((offer) => {
    offersMap.set(offer.id.toString(), offer);
  });

  return offersMap;
}
