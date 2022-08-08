# example-percy-webdriverio

Example app showing integration of [Percy](https://percy.io/) visual testing into WebDriverIO tests.

## WebDriverIO Tutorial

### Step 1

Clone the example application and install dependencies:

```bash
$ git clone git@github.com:percy/example-percy-webdriverio.git
$ cd example-percy-webdriverio
$ npm install
```

### Step 2

Sign in to Percy and create a new project. After
you've created the project, you'll be shown a token environment variable.

### Step 3

In the shell window you're working in, export the token environment variable:

**Unix**

```shell
$ export PERCY_TOKEN="<your token here>"
```

**Windows**

```shell
$ set PERCY_TOKEN="<your token here>"

# PowerShell
$ $Env:PERCY_TOKEN="<your token here>"
```

Note: Usually this would only be set up in your CI environment, but to keep things simple we'll
configure it in your shell so that Percy is enabled in your local environment.

### Step 4

Check out a new branch for your work in this tutorial

```shell
$ git checkout -b tutorial-example
$ npm run test
```

### Step 5

Use your text editor to edit `index.html` and introduce some visual changes. For example, you can
change the name of the logo class:

```html
<a href="index.html"><img src="images/log.png" alt="#" /></a>
```

### Step 6

Commit the change:

### Step 7

Run the tests with snapshots again:

```shell
$ npm run test
```

This will run the tests again and take new snapshots of our modified application. The new snapshots
will be uploaded to Percy and compared with the previous snapshots, showing any visual diffs.

At the end of the test run output, you will see logs from Percy confirming that the snapshots were
successfully uploaded and giving you a direct URL to check out any visual diffs.

### Step 8

Visit your project in Percy and you'll see a new build with the visual comparisons between the two
runs. Click anywhere on the Build 2 row. You can see the original snapshots on the left, and the new
snapshots on the right.

Percy has highlighted what's changed visually in the app! Snapshots with the largest changes are
shown first You can click on the highlight to reveal the underlying screenshot.

### Finished! 😀

From here, you can try making your own changes to the app and tests, if you like. If you do, re-run
the tests and you'll see any visual changes reflected in Percy.
