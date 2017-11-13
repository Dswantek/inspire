function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(drawQuote)
	// {
	// 	console.log('What is the quote', quote)
	// }

	quoteElem = document.getElementById('quote')

function drawQuote(quote){
	var template = `
	<div class="row">
		<div class="col-xs-12">
			<div> 
			<h3> "${quote.quote}" </h3> 
			</div>
			<div> <h5> - ${quote.author} </h5> </div>
		</div>
	</div>
	`
	quoteElem.innerHTML = template
}

}
