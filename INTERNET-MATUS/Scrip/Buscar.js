function searchReport() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const reportList = document.getElementById('report-list');
  const reports = reportList.getElementsByTagName('li');

  for (let i = 0; i < reports.length; i++) {
    const title = reports[i].getElementsByClassName('report-title')[0].textContent.toLowerCase();
    const details = reports[i].getElementsByClassName('report-details')[0].textContent.toLowerCase();
    
    if (title.includes(input) || details.includes(input)) {
      reports[i].style.display = '';
    } else {
      reports[i].style.display = 'none';
    }
  }
}
