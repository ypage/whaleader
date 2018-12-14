var data = {
    'login': '@boolean',
    // 'message': '@increment',//increment第几次点击登陆
    'uid': '@id',
    'name': '@cname',
    'token': '@guid'//token
}

export default [{
    path: '/login',
    data: data
}]