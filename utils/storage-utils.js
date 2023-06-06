const MAX_LENGTH = 20;

function clearHistory(page) {
    try {
        wx.showLoading({title: '正在清除历史', mask: true});
        wx.removeStorageSync('histories');
        wx.getSavedFileList({
            success: function (res) {
                if (res.fileList.length) {
                    res.fileList.forEach(function (file) {
                        wx.removeSavedFile({
                            filePath: file.filePath
                        });
                    });
                }
            }
        });
        wx.hideLoading();
        page.setData({histories: []});
    } catch (e) {
        wx.hideLoading();
        app.showToast(page, {content: '小猿出故障惹，正在修复，等会儿嗷'});
    }
}

function saveHistory(params) {

    //先将临时文件保存至本地
    wx.saveFile({
        tempFilePath: params.data.image,
        success: function (res) {
            params.data.image = res.savedFilePath;
            params.data.timestamp = new Date().getTime();

            let histories = getHistory();
            histories.unshift(params.data);
            while (histories.length > MAX_LENGTH) {
                let oldResult = histories.pop();
                wx.removeSavedFile({
                    filePath: oldResult.image
                });
            }
            try {
                wx.setStorageSync('histories', histories);
                params.saveHistorySuccess();
            } catch (e) {
                params.saveHistoryFail();
            }
        },
        fail: params.saveHistoryFail
    });
}

function getHistory() {
    let histories = [];
    try {
        histories = wx.getStorageSync('histories');
    } catch (e) {
        // do nothing
    }
    if (!histories || !histories.length) {
        histories = [];
    }
    return histories;
}

function saveVariable(name, value) {
    try {
        wx.setStorageSync(name, value);
    } catch (e) {
        console.error(`save variable error, name: ${name}, variable: ${value}, error: ${e}`);
    }
}

function getVariable(name) {
    let value = '';
    try {
        value = wx.getStorageSync(name);
        if (name === 'cookie' && value) {
          value = value.replace(/HttpOnly\s*,/g, '')
        }
    } catch (e) {
        console.error(`get variable error, name: ${name}, error: ${e}`);
    }

    return value;
}

function clearVariable(name) {
    try {
        wx.removeStroageSync(name);
    } catch (e) {
        console.error(`remove variable error, name: ${name}, error: ${e}`)
    }
}

module.exports = {
    getHistory,
    saveHistory,
    clearHistory,
    saveVariable,
    getVariable,
    clearVariable
};
