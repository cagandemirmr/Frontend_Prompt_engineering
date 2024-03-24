document.addEventListener("DOMContentLoaded", function() {
    // PNG dosyasını yükle
    const mapImage = document.getElementById('map-image');

    // PNG dosyası yüklendiğinde, gerekli işlemleri yapın
    mapImage.addEventListener('load', function() {
        // Örneğin, haritayı PNG üzerindeki koordinatlara göre işaretleyin
        // Bu kısımda gerekli JavaScript işlemlerini yapabilirsiniz.
    });

    // Modal penceresini açan fonksiyon
    function openModal(id) {
        const modal = document.getElementById('sidebar');
        const modalContent = modal.querySelector('h2');

        // Burada id'ye göre ilgili içeriği alabilirsiniz.
        const content = getContentById(id);

        // Modal içeriğini güncelle (örneğin il adı ve hikayesi)
        modalContent.innerHTML = content;

        // Modal'ı görünür hale getir
        modal.classList.add('visible');

        // Modal dışına tıklandığında kapat
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('visible');
            }
        }
    }
});
