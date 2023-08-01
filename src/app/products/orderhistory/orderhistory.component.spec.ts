import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderhistoryComponent } from './orderhistory.component';
import { HttpClientModule } from '@angular/common/http';

describe('OrderhistoryComponent', () => {
  let component: OrderhistoryComponent;
  let fixture: ComponentFixture<OrderhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderhistoryComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
