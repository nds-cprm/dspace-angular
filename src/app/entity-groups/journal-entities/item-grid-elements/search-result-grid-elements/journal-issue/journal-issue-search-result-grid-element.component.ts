import { Component } from '@angular/core';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { focusShadow } from '../../../../../shared/animations/focus';
import { SearchResultGridElementComponent } from '../../../../../shared/object-grid/search-result-grid-element/search-result-grid-element.component';
import { ItemSearchResult } from '../../../../../shared/object-collection/shared/item-search-result.model';
import { Item } from '../../../../../core/shared/item.model';

@listableObjectComponent('JournalIssueSearchResult', ViewMode.GridElement)
@Component({
  selector: 'ds-journal-issue-search-result-grid-element',
  styleUrls: ['./journal-issue-search-result-grid-element.component.scss'],
  templateUrl: './journal-issue-search-result-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item of the type Journal Issue
 */
export class JournalIssueSearchResultGridElementComponent extends SearchResultGridElementComponent<ItemSearchResult, Item> {
}
