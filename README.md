# warsdb
A barebones filterable visual database for Decipher's WARS TCG

"Searching" functions by toggling a number of sets and/or filtering by faction and cardtype. Pressing "filter" displays the results. If a faction and/or cardtype filter is selected without any sets toggled, the filter button will toggle all sets and display the results. Use the "reset" button or click the header title to clear results and toggles.

The card database is contained within the html of the page. Images are stored in the repository.

Code for the database was generated with an Excel formula to concatenate the div and image containers with the appropriate attributes from a table generated from the archive of Decipher's website on archive.org. An example is provided below for reference, where column C contains the card's number, column E contains the card's type, and column F contains the card's faction.

	=concatenate("<div class=",char(34),"card set-1 faction-",lower(F2)," type-",lower(E2),char(34),"><img loading=",char(34),"lazy",char(34)," src=",char(34),"img/1/WARS-EN01",text(C2,"000"),".jpg",char(34),"></div>")

*Edge of a Sword* was canceled midway through development. Card images were generated from the playtest file. Based on available card numbering, a few cards appear to have been planned as exclusive foils, so they appear at the end of the set (sets are sorted by number).

A single card for *Motion of Mind* was previewed by Decipher and is included here.

No cards for *Eye of Insight* were previewed but the set name is included for posterity.

Basic design approach and card styling css adapted from https://github.com/patrickgalbraith/zombicide-card-database.
