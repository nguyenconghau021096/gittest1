app.factory('cart', function () {
    var cartData=[];
    var cartDataCus=[];
    return{
        addBook:function(id, name, price){
            var addToExistingItem=false;
            for(var i=0; i<cartData.length; i++){
                if(cartData[i].name==name){
                    cartData[i].count++;
                    addToExistingItem=true;
                }
            }
            if(!addToExistingItem){
                cartData.push({
                    id:id,
                    count:1,
                    name: name,
                    price:price
                });
            }
        },
        getBooks:function(){
            return cartData;
        },
        getBooksCheckout:function(){
            return cartDataCus;
        }
    }
})