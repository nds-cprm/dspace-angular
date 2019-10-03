import { Component } from '@angular/core';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultListElementComponent } from '../../../../../shared/object-list/search-result-list-element/search-result-list-element.component';
import { ItemSearchResult } from '../../../../../shared/object-collection/shared/item-search-result.model';
import { Item } from '../../../../../core/shared/item.model';

@listableObjectComponent('OrgUnitSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-orgunit-search-result-list-element',
  styleUrls: ['./orgunit-search-result-list-element.component.scss'],
  templateUrl: './orgunit-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Organisation Unit
 */
export class OrgunitSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
}
