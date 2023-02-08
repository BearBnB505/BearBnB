// promise 요청 타임아웃 시간
const TIME_OUT = 300*1000;

const statusError = {
    status: false,
    json: {
        error: ["연결이 원할하지 않습니다. 잠시 후 다시 시도해 주세요."]
    }
};

// 백으로 요청할 promise
const requestPromise = (url, option) => {
    return fetch(url, option);
};

const timeoutPromise = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIME_OUT));
};

const getPromise = async (url, option) => {
    return await Promise.race([
        requestPromise(url, option),
        timeoutPromise()
    ]);
};

// 백으로 로그인 요청
export const loginUser = async (credentials) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    const data = await getPromise('/auth/login', option).catch(() => {
        return statusError;
    });

    if (parseInt(Number(data.status) / 100) === 2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
};

export const logoutUser = async (credentials, accessToken) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    const data = await getPromise('/logout-url', option).catch(() => {
        return statusError;
    });

    if (parseInt(Number(data.status)/100)===2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
};

export const requestToken = async (refreshToken) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({refresh_token: refreshToken})
    }

    const data = await getPromise('/auth/login', option).catch(() => {
        return statusError;
    });

    if (parseInt(Number(data.status) / 100) === 2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
};

// From chatCPT
const requestToken = (refreshToken) => {
    // code to make a request to the server to get a new access token using the refresh token
    let response = {};
    // Example code to make an API call to get a new access token
    axios.post('/api/token/refresh', { refreshToken: refreshToken })
        .then((res) => {
            response = {
                status: true,
                json: res.data
            };
        })
        .catch((error) => {
            response = {
                status: false,
                json: error.response.data
            };
        });
    return response;
};