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
        'Hoy en día representa una plataforma administrativa completa enfocada en optimizar la gestión inmobiliaria diaria. Actualmente, el sistema se encuentra en fase beta, operando con datos mock (simulados) a modo de demostración para exhibir todo el potencial y las funcionalidades de la plataforma.',
      ],
      mainFeatures: [
        'Sistema de roles y permisos de usuario',
        'Dashboard administrativo para la gestión del sistema',
        'Herramientas para administrar consultas de clientes',
        'Panel de control para la gestión dinámica de propiedades y contenido',
      ],
      stack: ['Angular', 'Spring Boot', 'MySQL'],
      technologies: ['Spring Security', 'Google Maps', 'Hateoas', 'Tailwind CSS'],
      githubLink: 'https://github.com/JuanVaccarezza06/front-end-sullivan-m-r',
      codeFilename: 'filter.service.ts',
      codeLanguage: 'typescript',
      demoLink: '',
      videoUrl: 'sullivanmor-preview.mp4',
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
      id: 'smart-sheet-reporter',
      title: 'Smart Sheet Reporter',
      intro:
        'Aplicación web full-stack para el procesamiento dinámico de archivos Excel y la generación automatizada de reportes mediante plantillas.',
      story: [
        '<strong>Smart Sheet Reporter</strong> fue desarrollado para transformar datos tabulares en documentos estructurados y listos para descargar. En este sistema, el Excel funciona como una base de datos: cada fila contiene la información necesaria para crear un documento, como puede ser una factura comercial, un reporte o un certificado.',
        'La plataforma cuenta con una interfaz fluida construida en Angular, que se comunica con un robusto backend en Java. El proceso es muy intuitivo: al cargar los datos, el motor del sistema lee el archivo en memoria y relaciona dinámicamente las columnas del Excel con palabras clave o campos definidos previamente en una plantilla de diseño.',
        'De esta forma, el sistema procesa la información de forma instantánea para generar documentos individuales, empaquetándolos en un archivo ZIP. La mayor fortaleza de esta arquitectura es su lógica altamente reutilizable: basta con agregar las reglas de tu negocio a los documentos origen, y el sistema se adaptara fácilmente a diferentes contextos de negocio sin necesidad de modificar el código.',
      ],
      mainFeatures: [
        'Lectura y parseo dinámico de archivos Excel (.xlsx)',
        'Generación automatizada de documentos a partir de plantillas',
        'Empaquetado y descarga de reportes en archivos ZIP',
        'Interfaz de usuario moderna e intuitiva',
      ],
      stack: ['Java', 'Angular', 'TypeScript'],
      technologies: ['Apache POI', 'Tailwind CSS', 'Manejo de Memoria'],
      githubLink: 'https://github.com/juanvaccarezza06/smart-sheet-reporter',
      codeFilename: 'ExcelUtils.java',
      codeLanguage: 'java',
      demoLink: '',
      videoUrl: 'smart-sheet-reporter-preview.mp4',
      code: `package com.smart_sheet.smart_sheet;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.InputStream;
import java.util.*;

public class ExcelUtils {

    public static List<DataRow> readExcel(InputStream is) throws Exception {
        List<DataRow> rows = new ArrayList<>();
        List<String> headers = new ArrayList<>();
        DataFormatter formatter = new DataFormatter();

        try (Workbook workbook = new XSSFWorkbook(is)) {
            for (Row row : workbook.getSheetAt(0)) {
                if (headers.isEmpty()) {
                    row.forEach(cell -> headers.add(formatter.formatCellValue(cell).trim()));
                } else {
                    Map<String, String> rowData = new HashMap<>();
                    for (int i = 0; i < headers.size(); i++) {
                        rowData.put(headers.get(i), formatter.formatCellValue(row.getCell(i)));
                    }
                    rows.add(new DataRow(rowData));
                }
            }
        }
        return rows;
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
        'A nivel técnico, destaca por prescindir de bases de datos relacionales estándar en favor de un sistema de almacenamiento y persistencia propio basado en archivos JSON, implementando clases genéricas para un manejo dinámico y eficiente de las colecciones de datos. Los invito a analizar su codigo disponible en su repositorio.',
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
      videoUrl: 'beach-resort-preview.mp4',
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
  ];

  email: string = "juanpirvaccarezza@gmail.com"
  github: string = "https://github.com/JuanVaccarezza06"
  linkedin: string = "https://www.linkedin.com/in/juan-pablo-vaccarezza-ab2719263/"

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
          behavior: 'smooth',
        });
      }
    }, 220);
  }
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fires only once
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
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
