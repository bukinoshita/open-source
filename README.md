# Open Source
> A list of GitHub issues to help beginners make their first pull request.

## Install
```bash
$ npm install
```

## Running
```bash
$ npm run dev
```

## Configuration
env.js is loaded in index.js to set up all the ENV variables, and the only one
variable being used right now is GITHUB_TOKEN which is the access token you can
generate with your GitHub account. For example, your env.js could simply look
like this:

```bash
process.env.GITHUB_TOKEN = '123456'
```

## License
[MIT](https://github.com/bukinoshita/open-source/blob/master/LICENSE) &copy; Bu Kinoshita
