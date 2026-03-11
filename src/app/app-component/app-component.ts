import { Component, HostListener, signal, ViewChild, ElementRef, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-app-component',
  imports: [],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {
  expandedProjectId = signal<string | null>(null);
  isVideoModalOpen = signal(false);

  @ViewChild('previewVideo') previewVideoRef?: ElementRef<HTMLVideoElement>;

  toggleProject(projectId: string): void {
    this.expandedProjectId.update((current) => (current === projectId ? null : projectId));

    afterNextRender(() => {
      this.previewVideoRef?.nativeElement?.play().catch(() => {});
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openVideoModal() {
    this.isVideoModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal() {
    this.isVideoModalOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeVideoModal();
  }
}