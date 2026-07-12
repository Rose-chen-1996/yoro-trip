document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('#packingList input[type="checkbox"]');

    // 1. LocalStorage から前回の状態を読み込んで復元
    checkboxes.forEach(checkbox => {
        // キー名を新しいリスト用に変更
        const savedState = localStorage.getItem(`yoro_camp_pack_${checkbox.value}`);
        
        if (savedState === 'true') {
            checkbox.checked = true;
            checkbox.closest('.check-item').classList.add('checked');
        }

        // 2. チェックボックス変更時に状態を即時保存
        checkbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem(`yoro_camp_pack_${checkbox.value}`, isChecked);
            
            if (isChecked) {
                checkbox.closest('.check-item').classList.add('checked');
            } else {
                checkbox.closest('.check-item').classList.remove('checked');
            }
        });
    });
});
