function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(drawQuote)
	// {
	// 	console.log('What is the quote', quote)
	// }

	quoteElem = document.getElementById('quote')

function drawQuote(quote){
	var template = `
	<div class="col-xs-12">
		<div> ${quote.quote}</div>
		<div> - ${quote.author}</div>
	</div>
	`
	quoteElem.innerHTML = template
}

}
