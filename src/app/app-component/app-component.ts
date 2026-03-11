import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-app-component',
  imports: [],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {
  expandedProjectId = signal<string | null>(null);

  toggleProject(projectId: string): void {
    this.expandedProjectId.update((current) => (current === projectId ? null : projectId));
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
