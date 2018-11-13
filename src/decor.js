const chalk   = require('chalk')
const fse     = require("fs-extra")
const shell   = require('shelljs')

exports.run = function(type, name) {
    name = typeof name === 'string' ? name : ''
    type = type.toLowerCase()
    switch(type) {
        case 'k':
        case 'koa':
        case 'koa2ts':
            initKoa(type, name)
            break
        case 'v':
        case 'vue':
        case 'vue2ts':
            initVue(type, name)
            break
        case 'a':
        case 'all':
            let koaName = name ? name + '_koa' : ''
            let vueName = name ? name + '_vue' : ''
            initKoa(type, koaName)
            initVue(type, vueName)
            break
    }
}

function initKoa(type, name) {
    console.log(chalk.green('init koa project ...'))
    let baseUrl = 'https://github.com/Azurewarth/koa2ts.git' 
    let opts = {
        url: name ? baseUrl + ' ' + name : baseUrl,
        name: name ? name : 'koa2ts',
    }
    execGit(opts)
}

function initVue(type, name) {
    console.log(chalk.green('init vue project ...'))
    let baseUrl = 'https://github.com/Azurewarth/vue2ts.git' 
    let opts = {
        url: name ? baseUrl + ' ' + name : baseUrl,
        name: name ? name : 'koa2ts',
    }
    execGit(opts)
}

function execGit(opts) {
    fse.remove('./' + opts.name).then(function() {
        if(!shell.which('git')) {
            shell.echo('Sorry, this script requires git')
            //退出当前进程
            shell.exit(1)
        }
        let command = 'git clone ' + opts.url
        console.log(chalk.green(command))
        if(shell.exec(command).code !== 0) {
            shell.echo('Error: Git commit failed')
            shell.exit(1)
        } else {
            shell.echo('init success')
        }
    })
}