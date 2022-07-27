/* .faqs__container--questions-1:active .answer-box{
    // display: block;*/

document.querySelector( ".faqs__container--questions-1" ).onclick = function ()
{
    document.querySelector( ".answer-box" ).classList.toggle( "active" );
};

document.querySelector( ".java-sctipt-2" ).onclick = function ()
{
    document.querySelector( ".java-sctipt-2-answer" ).classList.toggle( "active" );
};
document.querySelector( ".faqs__container--questions-3" ).onclick = function ()
{
    document.querySelector( ".java-sctipt-3-answer" ).classList.toggle( "active" );
};

