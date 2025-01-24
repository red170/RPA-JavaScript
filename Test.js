let totalDeCompra = 100

if (totalDeCompra >= 100 && totalDeCompra<=199){
    console.log(`el precio con descuento aplicado del 80% es de ${(totalDeCompra/100)*80}`)
}
else if (totalDeCompra >= 200){
    console.log(`el precio con descuento aplicado de mitad de precio es de ${(totalDeCompra/100)*50}`)
}
else{
    console.log('no aplica')
}