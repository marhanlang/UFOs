# UFOs
## Project Overview:
 The purpose of this project is to provide an in-depth analysis of UFO sightings by allowing users to filter for multiple criteria simultaneously using JavaScript and Bootstrap. 
 
## Results:

### Site Prior to Filtering:
Prior to filtering, the site will show the entire dataset.
![Prior to filtering](https://github.com/marhanlang/UFOs/blob/main/images/prefilter.png)

### Site with Single filter:
These images demonstrate how the dataset is filtered when a single filter is entered. The result shows all rows of data that match the single filter.
![Single filter](https://github.com/marhanlang/UFOs/blob/main/images/singleDTfilter.png) ![Single filter 2](https://github.com/marhanlang/UFOs/blob/main/images/singleStatefilter.png) 

### Site with Two Filters Entered:
These images demonstrate how the dataset is filtered when two filters are entered. The result shows all rows of data that match both filters and excludes data that does not match both of the filters.
![Double Filter](https://github.com/marhanlang/UFOs/blob/main/images/2filter.png) ![Double filter 2](https://github.com/marhanlang/UFOs/blob/main/images/2filter.2.png)


### Site with Three Filters:
This image demonstrates how the dataset is filtered when three filters are entered. The result shows all rows of data that match all of the filters. Data that does not match all filters will be excluded. When the number of filters is increased, the resulting data is more specific.
![Triple filter](https://github.com/marhanlang/UFOs/blob/main/images/trifilter.png)


## Summary:
While this design allows for filtering on a variety of values, the dataset is lacking consistency and limits the accuracy of filters. Due to dataset inconsistency, duration of the UFO sitings cannot be filtered. In order to allow for better analysis and more extensive filtering, the dataset should be cleaned and value format should be made consistent. Comment values are also messy and require cleaning, punctuation in comments is in HTML Unicode format and should be converted to the UTF8 format.
