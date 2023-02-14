
// An array property that gets the last element of an array
Object.defineProperties(Array.prototype, {
    last: {
        get(){
            return this[this.length - 1]
        }
    }
})

Object.defineProperties(Document.prototype, {
	// A document method that gets all events of the web page
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
 













