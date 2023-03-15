const btn_imp=document.getElementById ("btn1")

btn_imp.addEventListener("click",(evt)=>{
    const contenido = document.getElementById('datos').innerHTML

    const ventana = window.open('','','width=800, height=600');

    ventana.document.write('<html><head>');

    ventana.document.write('<title>pdf</title></head>');

    ventana.document.write('<body>');

    ventana.document.write(contenido);

    ventana.document.write('</body></html>');

    ventana.print();

    ventana.close()

})