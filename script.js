document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('#packingList input[type="checkbox"]');

    // 1. LocalStorage から前回の状態を読み込んで復元
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(`trip_pack_${checkbox.value}`);
        
        if (savedState === 'true') {
            checkbox.checked = true;
            // 親要素のlabelにスタイル適用用のクラスを追加
            checkbox.closest('.check-item').classList.add('checked');
        }

        // 2. チェックボックス変更時に状態を即時保存
        checkbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem(`trip_pack_${checkbox.value}`, isChecked);
            
            // クラスの付け替えで見た目を変更
            if (isChecked) {
                checkbox.closest('.check-item').classList.add('checked');
            } else {
                checkbox.closest('.check-item').classList.remove('checked');
            }
        });
    });
});
