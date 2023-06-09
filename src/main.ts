import './assets/styles/index.scss';

const modules = import.meta.glob<{ default: string }>('./pages/**/index.html', {
  eager: true
});
const matchModuleName = (path: string) => {
  const reg = /.\/pages\/(.*?)\/index.html/g;

  return reg.exec(path)?.[1];
};

for (const module in modules) {
  renderShape(matchModuleName(module)!, modules[module].default);
}

function renderShape(name: string, path: string) {
  const oA = document.createElement('a');
  oA.classList.add('shape-link');
  oA.href = path;
  oA.innerHTML = name;
  (document.querySelector('#app') as HTMLElement).appendChild(oA);
}
