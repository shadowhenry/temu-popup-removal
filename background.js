chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // 移除所有class属性中包含'MDL_'的div元素
      document.querySelectorAll('div[class*="MDL_"]').forEach(element => element.remove());

      // 移除所有div元素，其data-testid属性为'beast-core-modal'
      document.querySelectorAll('div[data-testid="beast-core-modal"]').forEach(element => element.remove());

      // 移除所有div元素，其data-testid属性为'beast-core-modal-mask'
      document.querySelectorAll('div[data-testid="beast-core-modal-mask"]').forEach(element => element.remove());

      // 移除所有div元素，其data-testid属性为'beast-core-modal-inner'
      document.querySelectorAll('div[data-testid="beast-core-modal-inner"]').forEach(element => element.remove());
    }
  });
});