function ClockController (){
    var clockService = new clockService()


    function draw(time){
        var template = `
        <div class="row">
            <div class="col-xs-12">
                <div> 
                <h4> "" </h4> 
                </div>
                <div> - ${quote.author}</div>
            </div>
        </div>
        `
        quoteElem.innerHTML = template
    }




}