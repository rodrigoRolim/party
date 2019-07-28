import setupApp from './app';
const port = process.env.PORT || 3000;

setupApp()
.then(app => app.listen(port, () => console.log(`app running on port ${port}`)))
.catch(error => {
  console.error(error)
  process.exit(1)
})
