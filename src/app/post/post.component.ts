import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() post: Post;

    @ContentChild('info', {static: true}) infoRef: ElementRef;
    @Output() onRemove = new EventEmitter<number>()

    removePost() {
        this.onRemove.emit(this.post.id)
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked')
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit')
    }

    ngDoCheck() {
        console.log('DoCheck')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes)
    }

    ngOnInit() {
        console.log('ngOnInit')
        // console.log(this.infoRef)
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit")
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked')
    }

    ngOnDestroy() {
        console.log('ngOnDestroy')
    }

}
