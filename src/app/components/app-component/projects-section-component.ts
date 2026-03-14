import { Component, HostListener, signal } from '@angular/core';
import Project from '../../models/Project';
import { IconComponent } from '../icon-component/icon-component';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-projects-section-component',
  imports: [IconComponent, HighlightModule],
  templateUrl: './projects-section-component.html',
  styleUrl: './projects-section-component.css',
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      id: 'sullivan',
      title: 'SullivanMór Real Estate',
      intro: 'Plataforma inmobiliaria con filtros avanzados y gestión de propiedades',
      story: [
        '<strong>SullivanMór</strong> surgió como una solución estratégica para establecer un canal de ventas digital exclusivo. La iniciativa buscaba profesionalizar la exhibición de inmuebles, migrando de una dependencia de plataformas de terceros hacia un ecosistema propio con control total sobre la información.',
        'Comenzó como una landing page simple para mostrar propiedades y recibir consultas. Con el tiempo, evolucionó hacia un CMS (Sistema de Gestión de Contenidos) a medida, permitiendo administrar directamente las propiedades publicadas, los filtros de búsqueda, textos del sitio y formularios de contacto.',
        'Hoy en día representa una plataforma administrativa completa enfocada en optimizar la gestión inmobiliaria diaria.',
      ],
      mainFeatures: [
        'Sistema de roles y permisos de usuario',
        'Dashboard administrativo para la gestión del sistema',
        'Herramientas para administrar consultas de clientes',
        'Panel de control para la gestión dinámica de propiedades y contenido',
      ],
      stack: ['Angular', 'Spring Boot', 'MySQL'],
      technologies: ['Spring Security', 'Google Maps', 'Hateoas', 'Tailwind CSS'],
      githubLink: 'https://github.com/tu-usuario/sullivanmor',
      codeFilename: 'filter.service.ts',
      codeLanguage: 'typescript',
      demoLink: '',
      videoUrl: 'sullivan-preview.mp4',
      code: `import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private http = inject(HttpClient);
  private criteria$ = new BehaviorSubject<Criteria>({});

  public properties$ = this.criteria$.pipe(
    debounceTime(300),
    switchMap(c => this.http.get('/api/properties', { params: c })),
    shareReplay(1)
  );

  public update(newCriteria: Criteria) {
    this.criteria$.next({ ...this.criteria$.value, ...newCriteria });
  }
}`,
    },
    {
      id: 'beach-resort-system',
      title: 'Sistema de Gestión de Balneario',
      intro:
        'Sistema integral por consola para la administración completa de un complejo de playa y sus servicios.',
      story: [
        '<strong>Sistema de Gestión de Balneario</strong> fue desarrollado como Trabajo Final para la materia Programación II, con el objetivo de aplicar conceptos avanzados de Programación Orientada a Objetos en un caso de uso real y complejo.',
        'La plataforma fue diseñada para gestionar el día a día de un complejo de playa, resolviendo la asignación de carpas, sombrillas y cocheras, así como el control de los empleados, puestos comerciales y atención médica.',
        'A nivel técnico, destaca por prescindir de bases de datos relacionales estándar en favor de un sistema de almacenamiento y persistencia propio basado en archivos JSON, implementando clases genéricas para un manejo dinámico y eficiente de las colecciones de datos.',
      ],
      mainFeatures: [
        'Gestión integral de reservas y contratos',
        'Arquitectura basada en Clases Genéricas y herencia abstracta',
        'Sistema robusto de manejo de excepciones personalizadas',
        'Control de estado y disponibilidad de servicios en tiempo real',
        'Persistencia de datos customizada mediante lectura/escritura de archivos JSON',
      ],
      stack: ['Java', 'JSON'],
      technologies: ['POO', 'Generics', 'Collections'],
      githubLink: 'https://github.com/juanvaccarezza06/beach-resort-system',
      codeFilename: 'Almacenamiento.java',
      codeLanguage: 'java',
      demoLink: '',
      videoUrl: '',
      code: `package PackageGenerico;

import PackageAbstract.Modelo;
import PackageException.CadenaVacia;
import PackageException.DatoNulo;
import java.util.*;

public class Almacenamiento<T extends Modelo> {

    Set<T> lista;

    public Almacenamiento() {
        this.lista = new LinkedHashSet<>();
    }

    public void agregarObjeto(T o) throws DatoNulo {
        if (o != null) {
            lista.add(o);
        } else {
            throw new DatoNulo();
        }
    }

    public T buscarObjeto(String ID) throws CadenaVacia {
        if (!ID.isEmpty()) {
            for (T t : lista) {
                if (t.getId().equals(ID)) {
                    return t;
                }
            }
        } else {
            throw new CadenaVacia();
        }
        return null;
    }
}`,
    },
    {
      id: 'crud-in-c',
      title: 'Sistema de Gestión de Vuelos',
      intro:
        'Sistema interactivo por consola en C para la gestión de vuelos y pasajeros, enfocado en el manejo de memoria dinámica y archivos binarios.',
      story: [
        '<strong>CRUD-in-C</strong> fue desarrollado con el objetivo de practicar y demostrar el uso de conceptos avanzados del lenguaje C, aplicados a un caso de gestión de aerolíneas.',
        'La plataforma permite administrar un sistema de vuelos a través de menús interactivos, resolviendo el alta, baja, actualización y búsqueda de vuelos, así como el control de los pasajeros asignados a cada avión.',
        'A nivel técnico, el proyecto destaca por su sistema de persistencia local de datos empleando archivos binarios (`fread`, `fwrite`, `fseek`) y una gestión eficiente de la memoria a través de punteros (simples y dobles) y arreglos dinámicos utilizando `malloc` y `realloc`.',
      ],
      mainFeatures: [
        'Sistema CRUD integral para la gestión de vuelos y pasajeros',
        'Persistencia de datos local mediante archivos binarios',
        'Gestión de memoria dinámica empleando punteros dobles',
        'Arquitectura modular basada en structs y funcionalidades',
      ],
      stack: ['C', 'Archivos binarios'],
      technologies: ['Punteros', 'Memoria Dinámica', 'Estructuras anidadas'],
      githubLink: 'https://github.com/juanvaccarezza06/crud-in-c',
      codeFilename: 'main.c',
      codeLanguage: 'c',
      demoLink: '',
      videoUrl: '',
      code: `int transferirArchivoHaciaArreglo(char nombreArchivo[],stFlight** arr,int* dimensionArreglo)
{
    FILE* archi;
    archi = fopen (nombreArchivo, "rb");
    if(!archi)
    {
        perror("Error al abrir el archivo.");
        return -1;
    }

    int validos = 0;
    while (fread(&(*arr)[validos], sizeof(stFlight), 1, archi) == 1)
    {
        validos++;

        if (validos == *dimensionArreglo)
        {
            stFlight* tmp = realizarRealloc(*arr, (*dimensionArreglo += INCREMENTO));
            if (!tmp)
            {
                perror("Realloc fallido. 'transferirArchivoHaciaArreglo'");
                fclose(archi);
                return -1;
            }
            *arr = tmp;
        }
    }

    fclose(archi);
    return validos;
}`,
    },
  ];

  expandedProjectId = signal<string | null>(null);
  isVideoModalOpen = signal(false);

  currentVideoUrl = signal<string | null>(null);

  toggleProject(projectId: string): void {
    const current = this.expandedProjectId();

    if (current === projectId) {
      this.expandedProjectId.set(null);
      return;
    }

    if (current !== null) {
      this.expandedProjectId.set(null);
      setTimeout(() => {
        this.expandedProjectId.set(projectId);
        this.scrollToCard(projectId); 
      }, 50);
    } else {
      this.expandedProjectId.set(projectId);
      this.scrollToCard(projectId); 
    }
  }

scrollToCard(projectId: string): void {
  setTimeout(() => {
    const element = document.getElementById(projectId);
    if (element) {
      const headerHeight = 90;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight - 16,
        behavior: 'smooth'
      });
    }
  }, 220);
}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openVideoModal(videoUrl: string) {
    this.currentVideoUrl.set(videoUrl);
    this.isVideoModalOpen.set(true);
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
