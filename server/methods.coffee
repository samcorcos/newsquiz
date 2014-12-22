Meteor.methods
  getData: (month, year, category) ->
    startDate = startDate(month,year)
    endDate = endDate(month,year)
    response = Meteor.http.call('GET', 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times") AND type_of_material:("News") AND section_name: ("#{category}") AND pub_date')



startDate = (month, year) ->
  year + month + "01"

endDate = (month, year) ->
  if month is "02"
    day = "28"
  else if month is "04" or "06" or "09" or "11"
    day = "30"
  else day = "31"
  year + month + day

console.log endDate("04", "2011")



#  var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times") AND type_of_material:("News") AND section_name:("Sports" "US" "Science" "Arts" ) AND pub_date:("2014-12-13")' + '&page=' + resultsPageNumber + '&api-key=' + NYTapiKey;

# NYT Key: 555828fbba8186bbd0311542bc625579:9:70514653

# http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=search term&fq=filter-field:(filter-term)&additional-params=values]&api-key=####


# http://api.nytimes.com/svc/search/v2/articlesearch.json?      [q=search term&fq=filter-field:(filter-term)&additional-params=values]&api-key=555828fbba8186bbd0311542bc625579:9:70514653

# fq
# Filtered search query using standard Lucene syntax.
# The filter query can be specified with or without a limiting field: label.
# See Filtering Your Search for more information about filtering.
# eg:    &fq=news_desk:("Sports" "Foreign")
#
# begin_date
# YYYYMMDD
# Restricts responses to results with publication dates of the date specified or later.
#
# end_date
# YYYYMMDD
# Restricts responses to results with publication dates of the date specified or earlier.



# Meteor.methods
#   getProperty: (zpid) ->
#     response = Meteor.http.call("GET", "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1e01y8ugd8r_1brbp&zpid=" + zpid)
#     temp = undefined
#     xml2js.parseString response.content, (err, result) ->
#       console.log "error parsing string"  if err
#       temp = result
#       return
#     temp
