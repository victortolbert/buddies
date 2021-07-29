import { serialize } from 'object-to-formdata';

const object = {
  /**
   * key-value mapping
   * values can be primitives or objects
   */
};

const options = {
  /**
   * include array indices in FormData keys
   * defaults to false
   */
  indices: false,

  /**
   * treat null values like undefined values and ignore them
   * defaults to false
   */
  nullsAsUndefineds: false,

  /**
   * convert true or false to 1 or 0 respectively
   * defaults to false
   */
  booleansAsIntegers: false,

  /**
   * store arrays even if they're empty
   * defaults to false
   */
  allowEmptyArrays: false,
};

const formData = serialize(
  object,
  options, // optional
  existingFormData, // optional
  keyPrefix, // optional
);

console.log(formData);


// for (var p of myFormData.entries())
// for (var p of myFormData)
// for (const [key, value] of mySearchParams) { }
// for (const [key, value] of mySearchParams.entries()) {}
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"

/**
 * URLSearchParams()
 */

// Retrieve params via url.search, passed into ctor
var url = new URL('https://example.com?foo=1&bar=2');
var params = new URLSearchParams(url.search);


// Pass in a string literal
var params2 = new URLSearchParams("foo=1&bar=2");
var params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
var params3 = new URLSearchParams([["foo", "1"], ["bar", "2"]]);

// Pass in a record
var params4 = new URLSearchParams({ "foo": "1", "bar": "2" });

/**
 * URLSearchParams.append()
 */
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);
//Query string is now: 'foo=1&bar=2&foo=4'

/**
 * URLSearchParams.entries()
 */

// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the key/value pairs
for (var pair of searchParams.entries()) {
  console.log(pair[0] + ', ' + pair[1]);
}

/**
 * URLSearchParams.forEach()
 */
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Log the values
searchParams.forEach(function (value, key) {
  console.log(value, key);
});


/**
 * URLSearchParams.get()
 */
// https://example.com/?name=Jonathan&age=18
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18
let address = params.get("address"); // null



/**
 * URLSearchParams.getAll()
 */
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);

console.log(params.getAll('foo')) //Prints ["1","4"].

/**
 * URLSearchParams.has()
 */
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

params.has('bar') === true; //true

/**
 * URLSearchParams.keys()
 */
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the keys
for (var key of searchParams.keys()) {
  console.log(key);
}

/**
 * URLSearchParams.set()
 */
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search);

//Add a third parameter.
params.set('baz', 3);
params.toString(); // "foo=1&bar=2&baz=3"


/**
 * URLSearchParams.toString()
 */
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);
console.log(params.toString());
//Prints 'foo=1&bar=2&foo=4'

// note: params can also be directly created
let url = new URL('https://example.com?foo=1&bar=2');
let params = url.searchParams;

// or even simpler
let params = new URLSearchParams('foo=1&bar=2');
