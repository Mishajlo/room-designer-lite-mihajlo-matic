import './Canvas.css'
import {type Ref, useEffect, useRef, useState} from 'react'
import ButtonBar from "../button-bar/ButtonBar.tsx";
import ConfirmModal from "../modal/ConfirmModal.tsx";

interface Point{
    x: number,
    y: number
}

const Canvas = () => {
    const canvasRef: Ref<HTMLCanvasElement> = useRef(null)
    const contextRef: Ref<CanvasRenderingContext2D> = useRef(null)
    const [points, setPoints] = useState<Point[]>([])
    const [edges, setEdges] = useState<Point[][]>([])
    const [modal, setModal] = useState<boolean>(false)
    const [mouseCoord, mouseMoved] = useState<Point>({
        x:-10,
        y:-10
    })

    useEffect(() => {
        const canvas = canvasRef.current

        canvas.width = 800
        canvas.height = 800

        const context = canvas.getContext('2d')
        context.fillStyle = "#B7C9E2"
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = "black"
        context.lineCap = 'round'
        context.strokeStyle = 'black'
        context.lineWidth = 5

        contextRef.current = context

        for (let i = 0; i < points.length; i++) {

            contextRef.current.beginPath()
            contextRef.current.moveTo(points[i].x, points[i].y)
            contextRef.current.lineTo(points[i].x, points[i].y)
            contextRef.current.stroke()
        }

        contextRef.current.lineWidth = 2
        for (let i = 0; i < edges.length; i++) {

            contextRef.current.beginPath()
            contextRef.current.moveTo(edges[i][0].x, edges[i][0].y)
            contextRef.current.lineTo(edges[i][1].x, edges[i][1].y)
            contextRef.current.stroke()

            const len = Math.sqrt((edges[i][0].x - edges[i][1].x) ** 2 + (edges[i][0].y - edges[i][1].y) ** 2);
            const textX = Math.abs((edges[i][0].x + edges[i][1].x) / 2);
            const textY = Math.abs((edges[i][0].y + edges[i][1].y) / 2);

            contextRef.current.font = "10px Arial";
            contextRef.current.fillText("length: " + Math.round(len) + "cm", textX+10,textY-10);
        }
        contextRef.current.lineWidth = 5


        contextRef.current.font = "10px Arial";
        contextRef.current.fillText("x: " + mouseCoord.x + " / y: " + mouseCoord.y, mouseCoord.x,mouseCoord.y);
        
    }, [points, edges, mouseCoord]);

    const newPoint = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent
        const point: Point = {
            x: offsetX,
            y: offsetY,
        }
        setPoints([...points, point])
        nativeEvent.preventDefault()
    }

    const mouseCoords = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent
        const currPoint = {
            x: offsetX,
            y: offsetY,
        }
        mouseMoved(currPoint)
    }

    const mouseLeft = () => {
        const currPoint = {
            x: -10,
            y: -10,
        }
        mouseMoved(currPoint)
    }

    const closeRoomFun = () => {
        for (let i = 0; i < points.length-1; i++) {
            const newEdge: Point[] = [points[i], points[i+1]]
            let flag = 1
            for (let j = 0; j < edges.length; j++) {
                if (edges[j][0] === newEdge[0] && edges[j][1] === newEdge[1]) {
                    flag = 0
                    break
                }
            }
            if (flag === 1) {
                setEdges(edges => [...edges, newEdge])
            }
        }
    }

    const clearFun = () => {
        setPoints([])
        setEdges([])
    }

    const saveFun = () => {
        return canvasRef.current?.toDataURL('image/png')
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            { modal && ( <ConfirmModal closeAction={toggleModal} clearAction={clearFun}/>)}
            <div>
                <ButtonBar CloseRoomAction={closeRoomFun} ClearAction={toggleModal} SaveAction={saveFun} />
                <canvas className="canvas-setup"
                ref={canvasRef}
                onClick={newPoint}
                onMouseMove={mouseCoords}
                onMouseOut={mouseLeft}>
                </canvas>
            </div>
        </div>
    )
}

export default Canvas