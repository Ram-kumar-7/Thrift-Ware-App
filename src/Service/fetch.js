
export const fetchApi = async ({ url, method, payload, isAuthorizationReq = true }) => {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...isAuthorizationReq && { Authorization: sessionStorage.getItem('token') }
        },
        method,
        body: JSON.stringify(payload),
    })
    return JSON.parse(await response.text())
}