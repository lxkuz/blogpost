import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import '../../channels/index'

import articlesStore from '../../stores/articles_store'

import { buildItemComponent } from 'packs/lib/helpers'
import ArticlesFilter from './articles_filter'

const ArticlesIndex = observer(() => {
  useEffect(() => {
    articlesStore.fetchItems()
  }, [])

  const {items} = articlesStore
  const noResults = items.length === 0

  return (
    <div className="row" id="articles-index">
      <div className="col-lg-4">
        <h4>Filters:</h4>
        <ArticlesFilter />
      </div>
      <div className="col-lg-8">
        { noResults && <p><h4>No results found, please try different search params...</h4></p> }
        { items.map(buildItemComponent) }
      </div>
  </div>
  )
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ArticlesIndex name="React" />,
    document.getElementById('articles-container')
  )
})
