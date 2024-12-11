function printSavedFungi() {
    var content = document.getElementById('saved-list').innerHTML;

    // Create a new window
    var printWindow = window.open('', '', 'height=600,width=800');
    
    // Add content to the new window
    printWindow.document.write(content);

    // Close the document to trigger rendering
    printWindow.document.close();

    // Open the print dialog
    printWindow.print();
};


function printAllFungi() {
    var content = document.getElementById('image-grid').innerHTML;

    // Create a new window
    var printWindow = window.open('', '', 'height=600,width=800');
    
    // Add content to the new window
    printWindow.document.write(content);

    // Close the document to trigger rendering
    printWindow.document.close();

    // Open the print dialog
    printWindow.print();
};
