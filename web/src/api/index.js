import { simpleDeepClone } from '@emircanerkul/simple-mind-map/src/utils/index'
import Vue from 'vue'
const SIMPLE_MIND_MAP_DATA = 'SIMPLE_MIND_MAP_DATA'
const SIMPLE_MIND_MAP_LANG = 'SIMPLE_MIND_MAP_LANG'
const SIMPLE_MIND_MAP_LOCAL_CONFIG = 'SIMPLE_MIND_MAP_LOCAL_CONFIG'


/**
 * @Author: 王林
 * @Date: 2021-08-02 22:36:48
 * @Desc: 克隆思维导图数据，去除激活状态
 */
const copyMindMapTreeData = (tree, root) => {
  tree.data = simpleDeepClone(root.data)
  // tree.data.isActive = false
  tree.children = []
  if (root.children && root.children.length > 0) {
    root.children.forEach((item, index) => {
      tree.children[index] = copyMindMapTreeData({}, item)
    })
  }
  return tree
}

/**
 * Loads and converts all markdown files into a mindmap.
 */
export const getData = () => {
  let tree = {
    "theme": {
      "template": "drupal",
      "config": {
      }
    },
    "scaleRatio": 0.01,
    "layout": "mindMap",
    "root": {
      "id": "drupal",
      "data": {
        "title": "Drupal",
        "text": "",
        // "image": "/image.jpeg",
        // "imageTitle": "图片名称",
        // "imageSize": {
        //     "width": 1000,
        //     "height": 563
        // },
        // "icon": ['priority_1'],
        // "tag": ["标签1", "标签2"],
        // "hyperlink": "http://lxqnsys.com/",
        // "hyperlinkTitle": "理想青年实验室",
        // "note": "理想青年实验室\n一个有意思的角落",
      },
      "children": []
    },
  };

  const findNodeById = (tree, id) => {
    let result = null

    if (tree.id === id) return tree;

    if (Array.isArray(tree.children) && tree.children.length > 0) {
      tree.children.some((node) => {
        result = findNodeById(node, id);
        return result;
      });
    }
    return result;
  }

  const docs = require.context('../../docs', true, /readme\.md$/)
  let mdKeys = require.context('../../docs', true, /\.md$/).keys();
  mdKeys.sort((a, b) => {
    return a.length - b.length
  });

  mdKeys.map((doc, index) => {
    let hierarchy = doc.slice(2, doc.length - 10).split('/');
    let i = hierarchy.length - 1;
    let e = hierarchy[i]
    let { html, attributes } = docs(doc);
    let result = findNodeById(tree.root, e);

    // e = e.replace(/[0-9]*\)\ /, '');
    if (e == '') {
      tree.root.data.text = html;
    } else if (result == null) {
      if (i == 0) {
        tree.root.children.push({
          "id": e,
          "data": {
            "title": e,
            "text": html,
            expand: false,
            ...attributes
          },
          "children": []
        })
      } else {
        findNodeById(tree.root, hierarchy[i - 1]).children.push({
          "id": e,
          "data": {
            "title": e,
            "text": html,
            expand: false,
            ...attributes
          },
          "children": []
        })
      }
    } else {
      result.data = {
        "title": e,
        "text": html,
        expand: false,
        ...attributes
      };
    }
  });

  const sortTree = (tree) => {
    if (Array.isArray(tree.children) && tree.children.length > 0) {
      tree.children.sort((a, b) =>
        parseInt(a.data.title.split(')')[0]) > parseInt(b.data.title.split(')')[0]) ? 1 : -1
      )

      tree.children.forEach((node) => {
        sortTree(node);
      });
    }
  }
  const removeWeights = (tree) => {
    tree.data.title = tree.data.title.slice(3);

    if (Array.isArray(tree.children) && tree.children.length > 0) {
      tree.children.forEach((node) => {
        removeWeights(node);
      });
    }
  }

  sortTree(tree.root);
  removeWeights(tree.root);
  return simpleDeepClone(tree)
}

/**
 * @Author: 王林
 * @Date: 2021-08-01 10:14:28
 * @Desc: 存储思维导图数据
 */
export const storeData = data => {

}

/**
 * @Author: 王林
 * @Date: 2021-08-01 10:24:56
 * @Desc: 存储思维导图配置数据
 */
export const storeConfig = config => {

}

/**
 * javascript comment
 * @Author: 王林
 * @Date: 2022-11-05 14:36:50
 * @Desc: 存储语言
 */
export const storeLang = lang => {
  localStorage.setItem(SIMPLE_MIND_MAP_LANG, lang)
}

/**
 * javascript comment
 * @Author: 王林
 * @Date: 2022-11-05 14:37:36
 * @Desc: 获取存储的语言
 */
export const getLang = () => {
  let lang = localStorage.getItem(SIMPLE_MIND_MAP_LANG)
  if (lang) {
    return lang
  }
  storeLang('en')
  return 'en'
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2022-11-14 18:57:31
 * @Desc: 存储本地配置
 */
export const storeLocalConfig = config => {
  localStorage.setItem(SIMPLE_MIND_MAP_LOCAL_CONFIG, JSON.stringify(config))
}

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2022-11-14 18:57:37
 * @Desc: 获取本地配置
 */
export const getLocalConfig = () => {
  let config = localStorage.getItem(SIMPLE_MIND_MAP_LOCAL_CONFIG)
  if (config) {
    return JSON.parse(config)
  }
  return null
}