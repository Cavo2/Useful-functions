// A function that can get elements by Attribute and it's value // document.getElementsByAttribute('attributeName', 'attributeValue')
Document.prototype.getElementsByAttribute = function (name, value) {
    
    let result = [];

    function main ( node ) {
        node ? null : node = document.body;
        if ( node.getAttribute(name) === value ) {
            result.push(node)
        }
        for ( let i = 0; i < node.children.length; i++ ) {
            main( node.children[i] );
        }
    }

    main()

    return result;
}


// An array property that gets the last element of an array // array.last
Object.defineProperties(Array.prototype, {
    last: {
        get(){
            return this[this.length - 1]
        }
    }
})

Object.defineProperties(Document.prototype, {
	// A document method that gets all events of the web page // document.allEvents
	allEvents: {
		get(){
			let all = document.querySelectorAll( ':not( link, svg  *,svg, script, meta ) '),
				allEvents = {};  
			for (let i=0, max=all.length; i < all.length; i++) {
				let element= all[i],
					events= getEventListeners(element),
					keys= Object.keys(events),
					values= Object.values(events);
				if(!keys.length) {
					continue;
				}
				for (const property in events) {
					allEvents[property]= [ element, events[property] ]
				}
			}
			return allEvents;
		}
	}
})













