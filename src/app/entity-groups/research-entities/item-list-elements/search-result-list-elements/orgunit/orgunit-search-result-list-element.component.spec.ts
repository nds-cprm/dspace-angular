import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrgunitSearchResultListElementComponent } from './orgunit-list-element.component';
import { of as observableOf } from 'rxjs';
import { Item } from '../../../../core/shared/item.model';
import { TruncatePipe } from '../../../../shared/utils/truncate.pipe';
import { ITEM } from '../../../../shared/items/switcher/listable-object-component-loader.component';
import { TruncatableService } from '../../../../shared/truncatable/truncatable.service';

let orgUnitListElementComponent: OrgunitSearchResultListElementComponent;
let fixture: ComponentFixture<OrgunitSearchResultListElementComponent>;

const mockItemWithMetadata: Item = Object.assign(new Item(), {
  bitstreams: observableOf({}),
  metadata: {
    'dc.title': [
      {
        language: 'en_US',
        value: 'This is just another title'
      }
    ],
    'dc.description': [
      {
        language: 'en_US',
        value: 'A description about the OrgUnit'
      }
    ]
  }
});
const mockItemWithoutMetadata: Item = Object.assign(new Item(), {
  bitstreams: observableOf({}),
  metadata: {
    'dc.title': [
      {
        language: 'en_US',
        value: 'This is just another title'
      }
    ]
  }
});

describe('OrgUnitListElementComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgunitSearchResultListElementComponent , TruncatePipe],
      providers: [
        { provide: ITEM, useValue: mockItemWithMetadata},
        { provide: TruncatableService, useValue: {} }
      ],

      schemas: [ NO_ERRORS_SCHEMA ]
    }).overrideComponent(OrgunitSearchResultListElementComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrgunitSearchResultListElementComponent);
    orgUnitListElementComponent = fixture.componentInstance;

  }));

  describe('When the item has an orgunit description', () => {
    beforeEach(() => {
      orgUnitListElementComponent.object = mockItemWithMetadata;
      fixture.detectChanges();
    });

    it('should show the description span', () => {
      const orgunitDescriptionField = fixture.debugElement.query(By.css('span.item-list-orgunit-description'));
      expect(orgunitDescriptionField).not.toBeNull();
    });
  });

  describe('When the item has no orgunit description', () => {
    beforeEach(() => {
      orgUnitListElementComponent.object = mockItemWithoutMetadata;
      fixture.detectChanges();
    });

    it('should not show the description span', () => {
      const orgunitDescriptionField = fixture.debugElement.query(By.css('span.item-list-orgunit-description'));
      expect(orgunitDescriptionField).toBeNull();
    });
  });
});
