# Rudimentary WARS TCG Database
*A barebones filterable visual database for Decipher's WARS TCG*

## Features
* **Basic Filtering:** "Searching" functions by applying filters to the database. The top navigation menu contains checkbox filters for each cardset and dropdown filters for faction and cardtype. Pressing "filter" displays the results.
	- *Toggling All Sets:* Click the "Set" label to toggle all sets. If a set is already checked, clicking the "Set" label will first check all sets in the category. If all sets are checked, clicking the "Set" label will uncheck all of them.
	- *Subcategories:* Tag filters are revealed when a faction or certain cardtype (asset or weapon) is selected. Cardtype tags override faction tags if a faction and cardtype are both selected.
	- *Filtering Validation:* If a faction and/or cardtype filter is selected without any sets checked, the filter button will check all sets and display the results. 
	- *Result Count:* The number of cards meeting the selected criteria is displayed beneath the "Filter" button when pressed.
	- *Clearing Results:* Use the "reset" button or click the header title at the top of the page to clear results and toggles.

## Database Notes
*Edge of a Sword* was canceled midway through development. Card images were generated from the playtest file. Based on available card numbering, a few cards appear to have been planned as exclusive foils, so they appear at the end of the set (sets are sorted by number).

A single card for *Motion of Mind* was previewed by Decipher and is included here.

No cards for *Eye of Insight* were previewed but the set name is included for posterity.

## Functionality
The card database is contained within the html of the page. Images are stored in the repository.

Code for the database was generated with an Excel formula to concatenate the div and image containers with the appropriate attributes from a table generated from the archive of Decipher's website on archive.org. An example is provided below for reference, where column C contains the card's number, column E contains the card's type, and column F contains the card's faction.

	=concatenate("<div class=",char(34),"card set-1 faction-",lower(F2)," type-",lower(E2),char(34),"><img loading=",char(34),"lazy",char(34)," src=",char(34),"img/1/WARS-EN01",text(C2,"000"),".jpg",char(34),"></div>")

## Thanks
Basic design approach and card styling css adapted from https://github.com/patrickgalbraith/zombicide-card-database.
