import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodosListComponent } from './todos-list.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
